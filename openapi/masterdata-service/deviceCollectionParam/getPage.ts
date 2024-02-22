// http://47.108.139.107:16700/doc.html#/default/设备数采数据参数相关/getPageUsingPOST_3
// 设备数据参数概览搜索VO
export interface IDeviceDataParametersOverviewSearchForVO {
    // 当前页面
    pageNo: number;
    // 设备参数编号
    code: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 设备参数名称
    name: string;
    // 状态
    dataStatus: number;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«设备数据参数概览返回VO»»
export interface IJSONResultPagingInformationDeviceDataParameterOverviewReturnsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPageInformationDeviceDataParameterOverviewReturnVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«设备数据参数概览返回VO»
export interface IPageInformationDeviceDataParameterOverviewReturnVO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IDeviceDataParameterOverviewReturnsVO[];
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
// 设备数据参数概览返回VO
export interface IDeviceDataParameterOverviewReturnsVO {
    // id
    id: number;
    // 设备参数名称
    name: string;
    // 数据类型(number数字 text文本)
    dataType: string;
    // 单位类型(quantity数量 time时间)
    unitType: string;
    // 设备参数编号
    code: string;
    // 设备参数单位
    unit: string;
    // 备注
    remark: string;
    // 状态
    dataStatus: number;
    // 创建人id
    createUserId: number;
    // 创建人姓名
    createUsername: string;
    // 创建时间
    createTime: string;
}
