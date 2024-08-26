import 'dart:async';
import 'dart:convert';
import 'package:rxdart/rxdart.dart';

void main() {
  fetchProductDataReactive();
}

void fetchProductDataReactive() {
  final stopwatch = Stopwatch()..start();

  final productInfoStream = Stream.fromFuture(fetchProductInfo());

  final productStream = productInfoStream.flatMap((productInfoResponse) {
    final productInfo = parseProductInfo(productInfoResponse);
    return Stream.fromFuture(fetchProductPrice(productInfo['id']))
        .map((priceResponse) {
      final productPrice = parseProductPrice(priceResponse);
      return {
        'name': productInfo['name'],
        'description': productInfo['description'],
        'price': productPrice
      };
    });
  });

  productStream.listen(
    (product) {
      stopwatch.stop();
      print("Product: $product");
      print('Execution time: ${stopwatch.elapsedMilliseconds} ms');
    },
    onError: (error) {
      stopwatch.stop();
      print("Error occurred: $error");
      print('Execution time: ${stopwatch.elapsedMilliseconds} ms');
    },
  );
}

Future<String> fetchProductInfo() async {
  // Simulasi panggilan API dengan delay 2 detik
  await Future.delayed(Duration(seconds: 2));
  return jsonEncode({
    'id': 1,
    'name': 'Smartphone',
    'description': 'Latest model smartphone with advanced features'
  });
}

Future<String> fetchProductPrice(int productId) async {
  // Simulasi panggilan API dengan delay 1 detik
  await Future.delayed(Duration(seconds: 1));
  return jsonEncode({'price': 500});
}

Map<String, dynamic> parseProductInfo(String response) {
  // Parsing JSON menjadi Map
  return jsonDecode(response);
}

int parseProductPrice(String response) {
  // Parsing JSON dan mengambil harga
  var data = jsonDecode(response);
  return data['price'];
}
