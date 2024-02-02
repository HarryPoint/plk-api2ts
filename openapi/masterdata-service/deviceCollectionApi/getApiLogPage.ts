// 开放api请求搜索VO
export interface I开放api请求搜索VO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: I分页排序VO[];
}
// 分页排序VO
export interface I分页排序VO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«开放api请求日志返回VO»»
export interface IJSONResult分页信息开放api请求日志返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I分页信息开放api请求日志返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«开放api请求日志返回VO»
export interface I分页信息开放api请求日志返回VO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: I开放api请求日志返回VO[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// 开放api请求日志返回VO
export interface I开放api请求日志返回VO {
    // id
    id: number;
    // 请求员工id
    reqUserId: number;
    // 请求员工姓名
    reqUsername: string;
    // 请求ip
    clientIp: string;
    // 请求类型
    reqType: string;
    // 请求类型描述
    reqTypeDesc: string;
    // 请求内容
    reqBody: string;
    // 是否成功
    isSuccess: string;
    // 异常码
    errorCode: string;
    // 异常信息
    errorInfo: string;
    // 创建时间
    createTime: string;
}
