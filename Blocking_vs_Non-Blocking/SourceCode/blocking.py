import time

def read_file_blocking(file_path):
    with open(file_path, 'r') as file:
        data = file.read()
        print(f"Konten file: {data}")

def main_blocking():
    start_time = time.time()
    for i in range(5):  # Asumsikan ada 5 file yang perlu dibaca
        read_file_blocking(f'file_{i}.txt')
    end_time = time.time()
    print(f"Total waktu (blocking): {end_time - start_time} detik")

main_blocking()
