import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultaCepService } from '../service/consulta-cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router, 
    private consultaCepService: ConsultaCepService
    ) { }

  ngOnInit(): void {
  }

  public cadastrar(form: NgForm){
    if (form.valid) {
      this.router.navigate(['./sucesso']);
    }else{
      alert('Formulário inválido')
    }
  }

  public consultaCEP(ev: any, f: NgForm){
    const cep = ev.target.value;
    if(cep !== ""){
      this.consultaCepService.getConsultaCep(cep).subscribe((response) => {
        console.log(response);
        this.populandoEndereco(response, f);
      });     
    }
  }

  private populandoEndereco(dados: any, f: NgForm) {
    f.form.patchValue({
      endereco: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    })
  }

}
