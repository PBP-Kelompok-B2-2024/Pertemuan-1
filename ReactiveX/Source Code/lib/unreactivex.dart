import 'dart:async';
import 'dart:convert';

void main() async {
  await fetchProductData();
}

Future<void> fetchProductData() async {
  final stopwatch = Stopwatch()..start();

  try {
    // Mengambil data produk dari API pertama
    var productResponse = await fetchProductInfo();
    var productInfo = parseProductInfo(productResponse);

    // Mengambil data harga dari API kedua
    var priceResponse = await fetchProductPrice(productInfo['id']);
    var productPrice = parseProductPrice(priceResponse);

    // Menggabungkan data produk dengan harga
    var product = {
      'name': productInfo['name'],
      'description': productInfo['description'],
      'price': productPrice
    };

    stopwatch.stop();
    print("Product: $product");
    print('Execution time: ${stopwatch.elapsedMilliseconds} ms');
  } catch (error) {
    stopwatch.stop();
    print("Error occurred: $error");
    print('Execution time: ${stopwatch.elapsedMilliseconds} ms');
  }
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
