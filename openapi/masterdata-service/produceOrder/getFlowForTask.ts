// 生产处理查询VO - 针对生产订单
export interface I生产处理查询VO针对生产订单 {
    // 生产订单id
    produceOrderId: number;
    // 生产任务id
    produceTaskId: number;
    // 异常分类
    type: string;
}
// JSONResult«List«生产处理基础信息响应DTO»»
export interface IJSONResultList生产处理基础信息响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I生产处理基础信息响应DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产处理基础信息响应DTO
export interface I生产处理基础信息响应DTO {
    // id
    id: number;
    // 所属生产任务id
    produceTaskId: number;
    // 任务号
    produceTaskNo: string;
    // 业务类型
    businessType: string;
    // 异常分类
    type: string;
    // 异常分类描述
    typeDesc: string;
    // 所属进出站记录id
    moveInOutRecordId: number;
    // 生产异常类型名称
    produceAbnormalName: string;
    // 生产异常类型编号
    produceAbnormalCode: string;
    // 报废数量
    abnormalQuantity: number;
    // 批次名称
    lotName: string;
    // 批次号
    lotNo: string;
    // 备注
    remark: string;
    // 对应生产委外id
    produceEntrustId: number;
    // 状态
    status: string;
    // 状态描述
    statusDesc: string;
    // 创建人id
    createUserId: number;
    // 创建用户名
    createUserName: string;
    // 创建时间
    createTime: string;
    // 图片上传key集合
    imageKeys: string;
    // 图片Url集合
    imageUrls: string[];
    // 工艺卡录入信息 - 仅已进出站有工艺卡信息时有值
    inputList: I进出站关键参数明细响应DTO[];
    // 异常描述
    desc: string;
    // 处理人id
    handleUserId: number;
    // 处理人
    handleUsername: string;
    // 处理时间
    handleTime: string;
    // 销售订单编码
    salesOrderCode: string;
    // 对应工序id
    processId: number;
    // 对应工序
    processName: string;
    // undefined
    materialId: number;
}
// 进出站关键参数明细响应DTO
export interface I进出站关键参数明细响应DTO {
    // 明细id
    id: number;
    // 明细名称/标题
    name: string;
    // 录入类型
    inputType: string;
    // 录入值 - 明细录入类型不是图片时，有值
    inputValue: string;
    // 图片上传key集合 - 明细录入类型是图片时，有值
    imageKeys: string[];
    // 图片Url集合 - 明细录入类型是图片时，有值
    imageUrls: string[];
}
