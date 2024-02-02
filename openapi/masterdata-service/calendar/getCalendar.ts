// 工厂日历搜索VO_1
export interface I工厂日历搜索VO_1 {
    // 月份 yyyy-MM, 如果月份不为空则优先按照月份查询，如果为空，则按照开始日期-结束日期查询
    month: string;
    // 开始日期 yyyy-MM-dd, 如果月份不为空则优先按照月份查询，如果为空，则按照开始日期-结束日期查询
    beginDate: string;
    // 结束日期 yyyy-MM-dd, 如果月份不为空则优先按照月份查询，如果为空，则按照开始日期-结束日期查询
    endDate: string;
}
// JSONResult«工厂日历返回VO»
export interface IJSONResult工厂日历返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 工厂日历返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
