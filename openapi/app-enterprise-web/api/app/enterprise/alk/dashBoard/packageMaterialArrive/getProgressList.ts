// JSONResult«List«包装材料到达进度VO»»
export interface IJSONResultListPackageMaterialArrivalProgressVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPackagingMaterialsArrivedVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 包装材料到达进度VO
export interface IPackagingMaterialsArrivedVO {
    // 订单号
    saleOrderCode: string;
    // 客户名称
    customerName: string;
    // 到达详情
    arriveProgressDetailList: IPackagingMaterialsArrivalScheduleDetailsVO[];
}
// 包装材料到达进度详情VO
export interface IPackagingMaterialsArrivalScheduleDetailsVO {
    // id
    id: number;
    // 物料名称
    materialName: string;
    // 到达状态
    arriveProgress: string;
    // new标记
    newFlag: boolean;
}
