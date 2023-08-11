export type TextInputBoxProps = {
  value: string;
  onChangeText: (val: string) => void;
  placeholder: string;
  isSecure: boolean;
  isError: boolean;
  label: string;
};

export type TrendingRenderProps = {
  item: any;
  index: number;
};

export type WatchListRenderProps = {
  item: any;
  index: number;
};

export type FavouriteRenderProps = {
  item: any;
  index: number;
};

export type WatchRenderProps = {
  item: any;
  index: number;
};

export type SubHeaderProps = {
  title: string;
  onPress: () => void;
};
