import { Injectable } from '@angular/core';
import { Observable ,of} from 'rxjs';

import {IsShowPostModal} from '../constants'
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }
  getIsShowPostModal():Observable<boolean>{
   const isShowPostModal=of(IsShowPostModal);
   return isShowPostModal;
  }
}
