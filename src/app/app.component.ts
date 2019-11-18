import { Component } from '@angular/core';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { L10n, loadCldr } from '@syncfusion/ej2-base';
import * as numberingSystems from 'cldr-data/supplemental/numberingSystems.json';
import * as gregorian from 'cldr-data/main/pt/ca-gregorian.json';
import * as numbers from 'cldr-data/main/pt/numbers.json';
import * as timeZoneNames from 'cldr-data/main/pt/timeZoneNames.json';

loadCldr(numberingSystems['default'], gregorian['default'], numbers['default'], timeZoneNames['default']);

L10n.load({
  'pt': {
    'schedule': {
      'day': 'Dia',
      'week': 'Semana',
      'workWeek': 'Dias úteis',
      'month': 'Mês',
      'today': 'Hoje',
      'agenda': 'Agenda',
      'weekAgenda': 'Agenda semanal',
      'workWeekAgenda': 'Agenda de dias úteis',
      'monthAgenda': 'Agenda mensal',
      'noEvents': 'Sem eventos',
      'emptyContainer': 'Não existem eventos para este dia.',
      'allDay': 'Dia todo',
      'start': 'Começo',
      'end': 'Fim',
      'more': 'mais',
      'close': 'Fechar',
      'cancel': 'Cancelar',
      'noTitle': '(Sem título)',
      'delete': 'Deletar',
      'deleteEvent': 'Deletar Evento',
      'deleteMultipleEvent': 'Deletar múltiplos eventos',
      'selectedItems': 'Itens selecionados',
      'deleteSeries': 'Deletar múltiplos',
      'edit': 'Editar',
      'editSeries': 'Editar múltiplos',
      'editEvent': 'Editar evento',
      'createEvent': 'Criar',
      'subject': 'Assunto',
      'addTitle': 'Adicionar título',
      'moreDetails': 'Mais detalhes',
      'save': 'Salvar',
      'editContent': 'Você quer editar este evento ou todo o conjunto?',
      'deleteRecurrenceContent': 'Você quer deletar este evento ou todo o conjunto?',
      'deleteContent': 'Deletar este evento?',
      'deleteMultipleContent': 'Deletar todos os eventos selecionados?',
      'newEvent': 'Novo evento',
      'title': 'Título',
      'location': 'Localização',
      'description': 'Descrição',
      'timezone': 'Fuso horário',
      'startTimezone': 'Começar fuso horário',
      'endTimezone': 'Terminar fuso horário',
      'repeat': 'Repetir',
      'saveButton': 'Salvar',
      'cancelButton': 'Cancelar',
      'deleteButton': 'Deletar',
      'recurrence': 'Repetir',
      'wrongPattern': 'Padrão de repetição não válido',
      'seriesChangeAlert': 'Mudanças feitas em itens específicos deste conjunto serão anuladas e o evento irá corresponder aos do mesmo conjunto novamente.',
      'createError': 'Diminua a duração do evento ou mude a frequência em que ocorre. A duração do evento deve ser menor do que a frequência em que ele ocorre no editor de eventos.',
      'recurrenceDateValidation': 'Alguns meses não têm a data selecionada. Nestes meses a frequência ocorrerá no último dia do mesmo.',
      'sameDayAlert': 'O evento ocorre duas vezes no mesmo dia.',
      'editRecurrence': 'Editar frequência',
      'repeats': 'Repete-se',
      'alert': 'Alerta',
      'startEndError': 'A data de fim é anterior ao começo do evento.',
      'invalidDateError': 'O valor da data é inválido.',
      'ok': 'Ok',
      'occurrence': 'Frequência.',
      'series': 'Conjunto.',
      'previous': 'Anterior',
      'next': 'Próximo',
      'timelineDay': 'Linha do tempo diária',
      'timelineWeek': 'Linha do tempo semanal',
      'timelineWorkWeek': 'Linha do tempo dias úteis',
      'timelineMonth': 'Linha do tempo mensal'
    },
    'recurrenceeditor': {
      'none': 'Nenhuma',
      'daily': 'Diariamente',
      'weekly': 'Semanalmente',
      'monthly': 'Mensalmente',
      'month': 'Mês',
      'yearly': 'Anualmente',
      'never': 'Nunca',
      'until': 'Até',
      'count': 'Contagem',
      'first': 'Primeiro',
      'second': 'Segundo',
      'third': 'Terceiro',
      'fourth': 'Quarto',
      'last': 'Último',
      'repeat': 'Repetir',
      'repeatEvery': 'Repetir todo',
      'on': 'Repetir no(a)',
      'end': 'Fim',
      'onDay': 'Fim',
      'days': 'Dia(s)',
      'weeks': 'Semana(s)',
      'months': 'Mês(es)',
      'years': 'Ano(s)',
      'every': 'todo',
      'summaryTimes': 'vez(es)',
      'summaryOn': 'on',
      'summaryUntil': 'até',
      'summaryRepeat': 'Repete-se',
      'summaryDay': 'Dia(s)',
      'summaryWeek': 'Semana(s)',
      'summaryMonth': 'Mês(es)',
      'summaryYear': 'Ano(s)'
    }
  }
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'schedule-ang8';
  public data: object[] = [{
    Id: 1,
    Subject: 'Meeting',
    StartTime: new Date(2018, 1, 15, 10, 0),
    EndTime: new Date(2018, 1, 15, 12, 30)
  }];
  public eventSettings: EventSettingsModel = {
    dataSource: this.data
  }
  public selectedDate: Date = new Date(2018, 1, 15);
  public views: Array<string> = ['Day', 'Week', 'WorkWeek', 'Month'];
}
