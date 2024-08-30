import time
import os

def read_file_blocking(file_path):
    try:
        with open(file_path, 'r') as file:
            data = file.read()
            print(f"Konten file {file_path}: {data}")
    except FileNotFoundError:
        print(f"File {file_path} tidak ditemukan.")

def main_blocking():
    # Ubah direktori kerja
    os.chdir(r'D:\SEMESTER 3\Prinsip Bahasa Pemrograman\Pertemuan-1\Blocking_vs_Non-Blocking\SourceCode')
    
    start_time = time.time()
    for i in range(5):  # Asumsikan ada 5 file yang perlu dibaca
        file_path = f'file_{i}.txt'
        read_file_blocking(file_path)
    end_time = time.time()
    print(f"Total waktu (blocking): {end_time - start_time} detik")

main_blocking()