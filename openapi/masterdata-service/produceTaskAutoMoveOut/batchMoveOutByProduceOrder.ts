// 生产任务自动出料上传数据DTO
export interface IProductionTaskAutomaticDischargeUploadDataDTO {
    // 标记id,(eg RFID)
    tagId: string;
    // 生产订单编号
    produceOrderCode: string;
    // 数量
    quantity: number;
    // 标记时间,(eg RFID绑定的时间) 格式：yyyy-MM-dd HH:mm:ss
    tagTime: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
