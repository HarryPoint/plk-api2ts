import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/生产订单相关/getFlowForTaskUsingGET
export default function fetchMethod(params: { produceOrderId?: number; produceTaskId?: number; type?: string }) {
    return http<IJSONResultListRespondsToTheDTOForProductionProcessingBasicInformation>({
        url: "/app-enterprise-web/api/app/enterprise/produceOrder/getFlowForTask",
        method: "get",
        params,
    });
}
// JSONResult«List«生产处理基础信息响应DTO»»
export interface IJSONResultListRespondsToTheDTOForProductionProcessingBasicInformation {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProductionProcessingBasicInformationRespondsToDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产处理基础信息响应DTO
export interface IProductionProcessingBasicInformationRespondsToDTO {
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
    inputList: IKeyParametersInAndOutOfTheStationDetailResponseDTO[];
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
export interface IKeyParametersInAndOutOfTheStationDetailResponseDTO {
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
