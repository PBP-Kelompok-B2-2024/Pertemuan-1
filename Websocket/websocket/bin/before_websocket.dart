import 'dart:async';
import 'dart:convert';
import 'package:http/http.dart' as http;

void main() {
  Timer.periodic(Duration(seconds: 5), (timer) async {
    var stopwatch = Stopwatch()..start(); // Start the stopwatch to measure execution time

    var response = await http.get(Uri.parse('https://gorest.co.in/public/v2/users'));

    stopwatch.stop(); // Stop the stopwatch
    print('Polling HTTP execution time: ${stopwatch.elapsedMilliseconds} ms');

    if (response.statusCode == 200) {
      List issues = jsonDecode(response.body);
      if (issues.isNotEmpty) {
        print('New users found:');
        for (var issue in issues) {
          print('User: ${issue['email']}');
        }
      } else {
        print('No new users.');
      }
    } else {
      print('Failed to load users');
    }
  });
}
