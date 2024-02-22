// http://47.108.139.107:16700/doc.html#/default/标签设置/getPageUsingPOST_17
// 异常标签搜索VO
export interface IExceptionTagSearchVO {
    // 当前页面
    pageNo: number;
    // 编号
    code: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 名称
    name: string;
    // 类型
    type: string;
    // 状态(是否启用)
    isValid: string;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«异常标签返回VO»»
export interface IJSONResultPagingInformationExceptionLabelReturnsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPagingInformationExceptionLabelReturnsVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«异常标签返回VO»
export interface IPagingInformationExceptionLabelReturnsVO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: ITheExceptionTagReturnsVO[];
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
// 异常标签返回VO
export interface ITheExceptionTagReturnsVO {
    // id
    id: number;
    // 所属分类
    type: string;
    // 所属分类
    typeDesc: string;
    // 标签名称
    name: string;
    // 标签编号
    code: string;
    // 是否启用
    dataStatus: number;
    // 创建人
    createUserId: number;
    // 创建人姓名
    createUsername: string;
    // 创建时间
    createTime: string;
}
