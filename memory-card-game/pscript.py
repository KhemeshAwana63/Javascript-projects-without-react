import os #for renaming
import shutil #for copying

#Changing the name of the files

Files = os.listdir("media")
number = 1
for file in Files:
    if file.endswith(".jpg") or file.endswith(".png"):
        os.rename(f'media/{file}' , f'media/photo-{number}.jpg')
        number += 1
#FileNotFoundError occured because os.rename has to know the whole path to the file where it is changing the name



#Copying the files
Files = os.listdir("media")
for file in Files:
    if file.endswith(".jpg"):
        shutil.copy(f'media/{file}' , f'media/media_copy/copy_{file}')


