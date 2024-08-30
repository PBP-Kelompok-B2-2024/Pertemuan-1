import asyncio
import time

async def read_file_non_blocking(file_path):
    with open(file_path, 'r') as file:
        data = file.read()
        print(f"Konten file: {data}")

async def main_non_blocking():
    start_time = time.time()
    tasks = []
    for i in range(5):  # Asumsikan ada 5 file yang perlu dibaca
        tasks.append(read_file_non_blocking(f'file_{i}.txt'))
    await asyncio.gather(*tasks)
    end_time = time.time()
    print(f"Total waktu (non-blocking): {end_time - start_time} detik")

asyncio.run(main_non_blocking())
