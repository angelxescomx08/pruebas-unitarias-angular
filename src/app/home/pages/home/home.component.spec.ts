import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';

describe('HomeComponent', () => {
  //componente que se va a testear
  let component: HomeComponent;
  //fixture es el envoltorio del componente sirve para acceder a las
  //propiedades del componente como por ejemplo el html y el ts
  let fixture: ComponentFixture<HomeComponent>;

  //beforeEach es una función que se ejecuta antes de cada test, se ejecuta
  //antes de cada it
  beforeEach(() => {
    //TestBed es un módulo de angular que se utiliza para configurar
    TestBed.configureTestingModule({
      //declarations son para componentes que no son stand alone
      declarations: [],
      //los stand alone components se importan en los imports
      imports: [CommonModule, HomeComponent],
      //providers son para servicios
      providers: [],
    }).compileComponents();
    //crea el componente
    fixture = TestBed.createComponent(HomeComponent);
    //crea una instancia del componente
    component = fixture.componentInstance;
    //detecta los cambios en el componente, ciclo de vida de angular
    fixture.detectChanges();
  });

  //afterEach es una función que se ejecuta después de cada test, se ejecuta
  //después de cada it
  afterEach(() => {
    //destruye el componente
    fixture.destroy();
  });

  //beforeAll es una función que se ejecuta antes de todos los test, se ejecuta
  //antes de todos los it
  beforeAll(() => {
    //se ejecuta antes de todos los test
  });

  //afterAll es una función que se ejecuta después de todos los test, se ejecuta
  //después de todos los it
  afterAll(() => {
    //se ejecuta después de todos los test
  });

  //it es una función que se utiliza para realizar un test, it es un sinonimo
  //de test y las siglas de it significan "it test"
  it('should create', () => {
    //comprueba que el componente se haya creado
    expect(component).toBeTruthy();
  });
});
