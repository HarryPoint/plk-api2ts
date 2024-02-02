// 物料出库扫码批次号查询对象
export interface I物料出库扫码批次号查询对象 {
    // 流程id
    appId: number;
    // 通用：提交项， 用户编辑的数据
    formData;
    // 批次号
    lotNo: string;
}
// JSONResult«List«物料出库扫码批次号分组返回对象»»
export interface IJSONResultList物料出库扫码批次号分组返回对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 物料出库扫码批次号分组返回对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
