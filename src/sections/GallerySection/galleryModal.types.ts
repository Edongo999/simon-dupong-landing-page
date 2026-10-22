export interface Photo {
  src: string;
  key: string;
  className?: string;
}


export interface GalleryModalProps {
  photos: Photo[];
}