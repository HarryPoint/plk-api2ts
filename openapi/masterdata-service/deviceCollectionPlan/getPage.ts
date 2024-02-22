// http://47.108.139.107:16700/doc.html#/default/设备数采数据方案相关/getPageUsingPOST_4
// 设备数据方案搜索VO
export interface IDeviceDataSchemeSearchVO {
    // 当前页面
    pageNo: number;
    // 编号
    code: string;
    // 分页大小
    pageSize: number;
    // 设备id集
    deviceIds: number[];
    // 排序字段集
    orders: IPagingSortVO[];
    // 名称
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
// JSONResult«分页信息«设备数采方案返回VO»»
export interface IJSONResultPagingInformationDeviceDataCollectionSchemeReturnsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPagingInformationDeviceDataCollectionSchemeReturnsVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«设备数采方案返回VO»
export interface IPagingInformationDeviceDataCollectionSchemeReturnsVO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IDeviceDataAcquisitionSchemeReturnsVO[];
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
// 设备数采方案返回VO
export interface IDeviceDataAcquisitionSchemeReturnsVO {
    // id
    id: number;
    // 方案名称
    name: string;
    // 方案编号
    code: string;
    // 版次号
    issueCode: string;
    // 设备集合
    deviceList: IIdNameNumberVO[];
    // 参数
    paramList: IIdNameNumberVO[];
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
// Id，名称，编号VO
export interface IIdNameNumberVO {
    // id
    id: number;
    // 名称
    name: string;
    // 编号
    code: string;
}
