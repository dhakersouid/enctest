import { Http } from '@angular/http';
import { Component } from '@angular/core';
import {
    WpApiModule,
    WpApiLoader,
    WpApiStaticLoader
} from '';
export function WpApiLoaderFactory(http: Http) {
    return new WpApiStaticLoader(http, 'http://YOUR_DOMAIN_HERE/wp-json/wp/v2/', '');
}
