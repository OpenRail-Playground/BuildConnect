import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'formatDateTime'
})
export class FormatDateTimePipe implements PipeTransform {

    transform(value: unknown, ...args: unknown[]): string {

        if (typeof value !== 'string') return ''

        const date = new Date(value)
        return date.toLocaleString('de-DE', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        })
    }
}
