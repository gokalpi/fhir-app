import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { FhirResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class FhirService {
  constructor(private httpClient: HttpClient) {}

  getPatients(): Observable<FhirResponse> {
    return this.httpClient.get<FhirResponse>(
      `${environment.fhirApiUrl}/Patient?_getpagesoffset=0&_count=10`
    );
  }

  getResources(url: string): Observable<FhirResponse> {
    return this.httpClient.get<FhirResponse>(url);
  }
}
