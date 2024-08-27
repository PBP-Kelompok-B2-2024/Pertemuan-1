import 'dart:convert';
import 'package:web_socket_channel/web_socket_channel.dart';

void main() {
  final channel = WebSocketChannel.connect(
    Uri.parse('wss://demo.piesocket.com/v3/channel_123?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self'),
  );

  channel.stream.listen((message) {
    var stopwatch = Stopwatch()..start(); // Start the stopwatch to measure execution time

    var issue = jsonDecode(message);
    // print('New issue received: ${issue['description']}');
    print('New issue received: $issue');

    stopwatch.stop(); // Stop the stopwatch
    print('WebSocket execution time: ${stopwatch.elapsedMilliseconds} ms');
  });

  // The application can keep running or perform other tasks while listening for new issues
}
