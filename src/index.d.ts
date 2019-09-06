import { ImageSource } from 'tns-core-modules/image-source';

export interface OptionsCommon {
  width?: number;
  height?: number;
  lockSquare?: boolean;
  ratioWidth: number;
  ratioHeight: number;
}

export interface Result {
  response: 'Success' | 'Error' | 'Cancelled';
  image: ImageSource | null;
}

export declare class ImageCropper {
    show(image: ImageSource, options?: OptionsCommon): Promise<Result>;
}
