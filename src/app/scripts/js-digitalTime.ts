export function digitalTime (): string {
    const date: any = new Date();
    let h: any = date.getHours();
    let m: any = date.getMinutes();
    let s: any = date.getSeconds();
    let d: any = date.getDate();
    let mn: any = date.getMonth() + 1;
    const y: any = date.getFullYear();
    let session: any = 'AM';


    if (h === 0) { h = 12; }
    if (d < 10) { d = '0' + d; }
    if (mn < 10) { mn = '0' + mn; }

    if (h > 12) { h = h - 12; session = 'PM'; }

    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    const time = h + ':' + m + ':' + s + ' ' + session + ' ' + mn + '/' + d + '/' + y;
    return time;
}
