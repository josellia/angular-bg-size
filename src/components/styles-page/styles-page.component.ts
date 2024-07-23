import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ResizeBgImageDirective } from '../../directives/resize-bg-image.directive';
import StylesProps, { IStylesDefault } from '../../models/bg.props';
import { State, StyleMap, showTypeStyle } from '../../utilitys/styles.utility';

const initialState: IStylesDefault = {
  background: '',
  color: '',
};

@Component({
  selector: 'app-styles-page',
  standalone: true,
  templateUrl: './styles-page.component.html',
  styleUrls: ['./styles-page.component.css'],
  imports: [ResizeBgImageDirective, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StylesPageComponent
  extends State<IStylesDefault>
  implements OnInit
{
  bg!: StylesProps;
  // TODO transformar em props
  url = `url(https://images.pexels.com/photos/19078659/pexels-photo-19078659/free-photo-of-ponto-de-referencia-ponto-historico-predios-edificios.jpeg?auto=compress&cs=tinysrgb)`;

  styles = {};
  stylesState: any;
  styleContent = {};

  constructor() {
    super(initialState);
  }
  ngOnInit() {
    this.bg = {
      backgroundRepeat: 'no-repeat',
      backgroundImage: `${this.url}`,
      height: '100vh',
      resize: 'both',
      minHeight: '100%',
    };

    this.styles = showTypeStyle({
      background: '#8257e5',
      color: '#fff',
      'font-size': '30px',
    });
    this.styleContent = showTypeStyle({
      background: '#000',
      color: '#fff',
    });

    // Using global state
    this.insertStylesState();
    this.stylesState = this.state;
    console.log('style', this.stylesState);
  }

  insertStylesState() {
    const CustomState = this.seState({
      background: '#e229c3ee',
      color: '#000',
    });

    return CustomState;
  }
}
