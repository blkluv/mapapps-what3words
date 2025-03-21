///
/// Copyright (C) 2023 con terra GmbH (info@conterra.de)
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///         http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

export interface What3WordsQueryReturnObject {
    geometry: __esri.Geometry;
    id: string;
    title: string;
}

export interface What3WordsQueryResult {
    coordinates: {
        lat: number;
        lng: number;
    }
    country: string;
    language: string;
    map: string;
    nearestPlace: string;
    square: {
        southwest: {
            lat: number;
            lng: number;
        },
        northeast: {
            lat: number;
            lng: number;
        }
    }
    words: string;
}

export interface What3WordsResult {
    geometry: __esri.Point;
    roundedLatitude: number;
    roundedLongitude: number;
    words: string;
}

export interface What3WordsResults {
    results: What3WordsResult[];
    total: number;
}

export interface What3WordsSuggestionItem {
    country: string;
    language: string;
    nearestPlace: string;
    rank: number;
    words: string;
}

export interface What3WordsSuggestionItems {
    suggestions: What3WordsSuggestionItem[];
}
