import {Component} from '@angular/core';
import htmlToImage from 'html-to-image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public contentList = [
    {
      background: '#3B5998',
      icon: 'fa fa-facebook-square',
      filename: 'facebook'
    },
    {
      background: '#BB0000',
      icon: 'fa fa-youtube-square',
      filename: 'youtube'
    },
    {
      background: '#55ACEE',
      icon: 'fa fa-twitter-square',
      filename: 'twitter'
    }
  ];

  downloadAsPng(filename: string, index: number): void {
    document.getElementById(`non-printable-${index}`).style.display = 'none';

    htmlToImage.toPng(document.getElementById(`printable-${index}`)).then((dataurl) => {
      const link: any = document.createElement('a');

      link.download = `${filename}.png`;
      link.href = dataurl;
      link.click();

      document.getElementById(`non-printable-${index}`).style.display = 'block';
    });
  }

}
