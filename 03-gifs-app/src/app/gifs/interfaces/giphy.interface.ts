export interface Analytics {
    onclick: Onclick;
    onload :  Onclick;
    onsent :  Onclick;
}

export interface FixedHeight {
    frames?  : string;
    hash?    : string;
    height   : string;
    mp4?     : string;
    mp4_size?: string;
    size     : string;
    url      : string;
    webp     : string;
    webp_size: string;
    width    : string;
}

export interface GiphyItem {
    alt_text                  : string;
    analytics                 : Analytics;
    analytics_response_payload: string;
    bitly_gif_url             : string;
    bitly_url                 : string;
    content_url               : string;
    embed_url                 : string;
    id                        : string;
    images                    : Images;
    import_datetime           : Date;
    is_low_contrast           : boolean;
    is_sticker                : number;
    rating                    : Rating;
    slug                      : string;
    source                    : string;
    source_caption?           : string;
    source_post_url           : string;
    source_tld                : string;
    title                     : string;
    trending_datetime         : Date | TrendingDatetimeEnum;
    type                      : Type;
    url                       : string;
    user?                     : User;
    username                  : string;
}

export interface GiphyResponse {
    data      : GiphyItem[];
    meta      : Meta;
    pagination: Pagination;
}

export interface Images {
    fixed_height            : FixedHeight;
    fixed_height_downsampled: FixedHeight;
    fixed_height_small      : FixedHeight;
    fixed_width             : FixedHeight;
    fixed_width_downsampled : FixedHeight;
    fixed_width_small       : FixedHeight;
    original                : FixedHeight;
}

export interface Meta {
    msg        : string;
    response_id: string;
    status     : number;
}

export interface Onclick {
    url: string;
}

export interface Pagination {
    count      : number;
    offset     : number;
    total_count: number;
}

export enum Rating {
    G = "g",
}

export enum TrendingDatetimeEnum {
    The00000000000000 = "0000-00-00 00:00:00",
}

export enum Type {
    GIF = "gif",
}

export interface User {
    avatar_url   : string;
    banner_image : string;
    banner_url   : string;
    description  : string;
    display_name : string;
    instagram_url: string;
    is_verified  : boolean;
    profile_url  : string;
    website_url  : string;
    username     : string;
}

