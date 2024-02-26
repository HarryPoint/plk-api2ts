import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产任务相关/moveOutUsingPOST
*/
export default function fetchMethod(data: IInboundAndOutboundInformationDTO, params: { enterpriseId?: number }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/produceTask/moveOut",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
/** 进出站信息DTO */
export interface IInboundAndOutboundInformationDTO {
    /** 进出站记录id - 如果是从进出站记录里面点进来的，则必传 */
    moveInOutRecordId?: number;
    /** 生产任务id */
    produceTaskId: number;
    /** 成品物料填写信息列表 */
    finishedMaterialInputList: IFinishedMaterialFillRequestDTO[];
    /** BOM消耗列表 */
    bomMaterials?: IBOMConsumptionRequestDTO[];
    /** 关键参数信息填写 */
    keyParametersInfo?: IEntryAndExitProcessCardFilling;
    /** undefined */
    handleOtherAsync?: string;
}
/** 成品物料填写请求DTO */
export interface IFinishedMaterialFillRequestDTO {
    /** 批次id */
    lotOrderId?: number;
    /** 实际数(质检数) */
    actualQuantity?: number;
    /** 再次申请质检数 */
    applyQualityAgainQuantity?: number;
    /** 操作时间 */
    optTime?: string;
}
/** BOM消耗请求DTO */
export interface IBOMConsumptionRequestDTO {
    /** 生产工艺路径步骤bom明细关联id */
    id: number;
    /** 对应物料id */
    materialId: number;
    /** 实际数 */
    actualQuantity: number;
    /** 进料批次列表 */
    lotOrders?: IBomConsumesTheBatchOrderRequestObject[];
    /** 进料外部码列表 */
    externalCodeList?: string[];
}
/** bom消耗批次订单请求对象 */
export interface IBomConsumesTheBatchOrderRequestObject {
    /** 批次订单id */
    id: number;
    /** undefined */
    lotNo?: string;
    /** 实际数 */
    actualQuantity: number;
    /** 序列号ids */
    serialNoIds?: number[];
}
/** 进出站工艺卡填写 */
export interface IEntryAndExitProcessCardFilling {
    /** 关键参数id */
    id?: number;
    /** 录入集合 - 带录入信息 */
    keyParameterDetailList?: IDetailsOnKeyParameters[];
}
/** 关键参数明细填写信息 */
export interface IDetailsOnKeyParameters {
    /** 明细id */
    id?: number;
    /** 录入值 - 明细录入类型不是图片时，有值 */
    inputValue?: string;
    /** 图片上传key集合 - 明细录入类型是图片时，有值 */
    imageKeys?: string[];
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
