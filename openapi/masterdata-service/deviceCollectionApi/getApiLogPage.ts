// 开放api请求搜索VO
export interface I开放api请求搜索VO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: 分页排序VO[];
}
// JSONResult«分页信息«开放api请求日志返回VO»»
export interface IJSONResult分页信息开放api请求日志返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«开放api请求日志返回VO»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
