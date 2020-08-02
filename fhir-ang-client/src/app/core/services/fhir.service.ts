import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { FhirResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class FhirService {
  constructor(private httpClient: HttpClient) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // getPatients(): Observable<FhirResponse> {
  //   return this.httpClient.get<FhirResponse>(
  //     `${environment.fhirApiUrl}/Patient?_getpagesoffset=0&_count=10`
  //   );
  // }

  // getResources(url: string): Observable<FhirResponse> {
  //   return this.httpClient.get<FhirResponse>(url);
  // }

  // getResourcesByType(
  //   resourceType: string,
  //   criteria: string[],
  //   sortBy: string[],
  //   pageSize: string
  // ): Observable<FhirResponse> {
  //   let url = `${environment.fhirApiUrl}/${resourceType}`;

  //   if (criteria.length > 0) {
  //     url = url + '/_search?' + criteria.join('&');
  //   }

  //   if (sortBy.length > 0) {
  //     url = url + 'sort=' + sortBy.join(',');
  //   }

  //   return this.httpClient.get<FhirResponse>(
  //     `${environment.fhirApiUrl}/${resourceType}`
  //   );
  // }

  create({ resourceType, body }): Observable<FhirResponse> {
    if (!resourceType) {
      throw new Error('resourceType is required');
    } else if (!body) {
      throw new Error('body is required');
    }

    return this.httpClient.post<FhirResponse>(
      `${environment.fhirApiUrl}/${resourceType}`,
      body
    );
  }

  delete({ resourceType, id }): Observable<FhirResponse> {
    if (!resourceType) {
      throw new Error('resourceType is required');
    } else if (!id) {
      throw new Error('id is required');
    }

    return this.httpClient.delete<FhirResponse>(
      `${environment.fhirApiUrl}/${resourceType}/${resourceType}/${id}`
    );
  }

  getByUrl(url: string) {
    return this.httpClient.get(url);
  }

  read({ resourceType, id }) {
    if (!resourceType) {
      throw new Error('resourceType is required');
    } else if (!id) {
      throw new Error('id is required');
    }

    return this.httpClient.get(
      `${environment.fhirApiUrl}/${resourceType}/${id}`
    );
  }

  search({ resourceType, params = [] }): Observable<FhirResponse> {
    if (!resourceType) {
      throw new Error('resourceType is required');
    }

    const searchString =
      params && params.length > 0 ? `?${params.join('&')}` : '';

    return this.httpClient.get<FhirResponse>(
      `${environment.fhirApiUrl}/${resourceType}/_search` + searchString
    );
  }

  update({ resourceType, id, body }): Observable<FhirResponse> {
    if (!resourceType) {
      throw new Error('resourceType is required');
    } else if (!id) {
      throw new Error('id is required');
    } else if (!body) {
      throw new Error('body is required');
    }

    return this.httpClient.put<FhirResponse>(
      `${environment.fhirApiUrl}/${resourceType}/${id}`,
      body
    );
  }
}
