import { Pipe, PipeTransform } from '@angular/core';
import { IPost } from '../components/custom-pipes/custom-pipes.component';

@Pipe({
  name: 'filter',
  /** pure = true - задействует transform, только если данные ввода изменились
   * при изменении/добавлении/удалении эллементов из array, он не видет изменения
   * pure = false - срабатывает на любое изменение
   */
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(posts: IPost[], search: string = '', field: string = 'title'): IPost[] {
    if (!search.trim()) {
      return posts;
    }

    return posts.filter(post => {
      /** post[field] - использует поле field в обьекте post */
      return post[field].toLowerCase().includes(search.toLowerCase());
    });
  }

}
