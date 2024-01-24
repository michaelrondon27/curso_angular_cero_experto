export interface SearchResponse {
    data:       Gif[];
    meta:       Meta;
    pagination: Pagination;
}

export interface Gif {
    id: string;
    analytics: Analytics;
    analytics_response_payload: string;
    bitly_gif_url: string;
    bitly_url: string;
    content_url: string;
    embed_url: string;
    images: Images;
    import_datetime: Date;
    is_sticker: number;
    rating: Rating;
    slug: string;
    source: string;
    source_post_url: string;
    source_tld: string;
    title: string;
    trending_datetime: TrendingDatetime;
    type: Type;
    url: string;
    user: User;
    username: Username;
}

export interface Analytics {
    onclick: Onclick;
    onload:  Onclick;
    onsent:  Onclick;
}

export interface Onclick {
    url: string;
}

export interface Images {
    downsized: The480_WStill;
    downsized_large: The480_WStill;
    downsized_medium: The480_WStill;
    downsized_small: DownsizedSmall;
    downsized_still: The480_WStill;
    fixed_height: FixedHeight;
    fixed_height_downsampled: FixedHeight;
    fixed_height_small: FixedHeight;
    fixed_height_small_still: The480_WStill;
    fixed_height_still: The480_WStill;
    fixed_width: FixedHeight;
    fixed_width_downsampled: FixedHeight;
    fixed_width_small: FixedHeight;
    fixed_width_small_still: The480_WStill;
    fixed_width_still: The480_WStill;
    hd?: DownsizedSmall;
    looping: Looping;
    original: FixedHeight;
    original_mp4: DownsizedSmall;
    original_still: The480_WStill;
    preview: DownsizedSmall;
    preview_gif: The480_WStill;
    preview_webp: The480_WStill;
    "480w_still": The480_WStill;
}

export interface The480_WStill {
    height: string;
    size: string;
    url: string;
    width: string;
}

export interface DownsizedSmall {
    height: string;
    mp4: string;
    mp4_size: string;
    width: string;
}

export interface FixedHeight {
    frames?: string;
    hash?: string;
    height: string;
    mp4?: string;
    mp4_size?: string;
    size: string;
    width: string;
    url: string;
    webp: string;
    webp_size: string;
}

export interface Looping {
    mp4: string;
    mp4_size: string;
}

export enum Rating {
    G = "g",
}

export enum TrendingDatetime {
    The00000000000000 = "0000-00-00 00:00:00",
}

export enum Type {
    GIF = "gif",
}

export interface User {
    avatar_url: string;
    banner_image: string;
    banner_url: string;
    display_name: DisplayName;
    description: Description;
    instagram_url: string;
    is_verified: boolean;
    profile_url: string;
    username: Username;
    website_url: string;
}

export enum Description {
    TheGiphyChannelForTOEIAnimation = "The Giphy channel for TOEI Animation",
}

export enum DisplayName {
    ToeiAnimation = "Toei Animation",
}

export enum Username {
    ToeiAnimation = "ToeiAnimation",
}

export interface Meta {
    msg: string;
    response_id: string;
    status: number;
}

export interface Pagination {
    count: number;
    offset: number;
    total_count: number;
}
