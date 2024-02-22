// 设备数采数据详单搜索VO
export interface IDeviceDataAcquisitionDataListSearchVO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 设备id
    deviceId: number;
    // 是否有异常
    hasError: string;
    // 开始时间 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 结束时间 yyyy-MM-dd HH:mm:ss
    endTime: string;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«设备数采数据详单返回VO»
export interface IJSONResultTheDeviceDataCollectionDetailsAreReturnedToVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITheDeviceDataCollectionDetailListIsReturnedToVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 设备数采数据详单返回VO
export interface ITheDeviceDataCollectionDetailListIsReturnedToVO {
    // 分页信息
    dataPages: IPageInformationDeviceDataCollectionDetailsPageInformationIsReturnedToVO;
    // 设备信息
    deviceInfo: IDeviceDataAcquisitionStatusMessageVO;
}
// 分页信息«设备数采数据详单分页信息返回VO»
export interface IPageInformationDeviceDataCollectionDetailsPageInformationIsReturnedToVO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IDeviceDataCollectionCDRPageInformationIsReturnedToVO[];
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
// 设备数采数据详单分页信息返回VO
export interface IDeviceDataCollectionCDRPageInformationIsReturnedToVO {
    // id
    id: number;
    // 数据提交时间
    collectTime: string;
    // 请求员工id
    reqUserId: number;
    // 请求员工姓名
    reqUsername: string;
    // 在线状态
    deviceOnlineStatus: string;
    // 设备状态
    deviceStatus: string;
    // 拓展数据
    extData: Record<string, Record<string, any>>;
    // 详情
    details: IDeviceDataCollectionDataDetailsAreReturnedToVO[];
    // 是否有异常
    hasError: string;
}
// 设备数采数据明细返回VO
export interface IDeviceDataCollectionDataDetailsAreReturnedToVO {
    // 设备数采参数id
    deviceCollectionParamId: number;
    // 设备数采参数名称
    deviceCollectionParamName: string;
    // 设备数采参数编号
    deviceCollectionParamCode: string;
    // 设备数采参数单位
    deviceCollectionParamUnit: string;
    // 结果
    result: number;
    // 单位
    unit: string;
    // 下限
    lowerLimit: number;
    // 上限
    upperLimit: number;
    // 异常类型
    errorType: string;
    // 异常值
    errorResult: number;
}
// 设备数采状态信息VO
export interface IDeviceDataAcquisitionStatusMessageVO {
    // id
    id: number;
    // 设备名称
    name: string;
    // 设备编号
    code: string;
    // 设备数采方案id
    deviceCollectionPlanId: number;
    // 设备数采方案名称
    deviceCollectionPlanName: string;
    // 设备数采方案编号
    deviceCollectionPlanCode: string;
    // 在线状态
    onlineStatus: string;
    // 在线状态描述
    onlineStatusDesc: string;
    // 设备状态
    status: string;
    // 设备状态描述
    statusDesc: string;
    // 最后通讯时间
    lastApiTime: string;
}
