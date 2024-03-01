import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产任务相关/moveOutUsingPOST
*/
export default function fetchMethod(options: { data: IInboundAndOutboundInformationDTO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/produceTask/moveOut",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 进出站信息DTO */
export interface IInboundAndOutboundInformationDTO {
    /** BOM消耗列表 */
    bomMaterials?: IBOMConsumptionRequestDTO[];
    /** 成品物料填写信息列表 */
    finishedMaterialInputList: IFinishedMaterialFillRequestDTO[];
    /** undefined */
    handleOtherAsync?: EInboundAndOutboundInformationDTO_handleOtherAsync;
    /** 关键参数信息填写 */
    keyParametersInfo?: IEntryAndExitProcessCardFilling;
    /** 进出站记录id - 如果是从进出站记录里面点进来的，则必传 */
    moveInOutRecordId?: string;
    /** 生产任务id */
    produceTaskId: string;
}
/** BOM消耗请求DTO */
export interface IBOMConsumptionRequestDTO {
    /** 实际数 */
    actualQuantity: number;
    /** 进料外部码列表 */
    externalCodeList?: string[];
    /** 生产工艺路径步骤bom明细关联id */
    id: string;
    /** 进料批次列表 */
    lotOrders?: IBomConsumesTheBatchOrderRequestObject[];
    /** 对应物料id */
    materialId: string;
}
/** bom消耗批次订单请求对象 */
export interface IBomConsumesTheBatchOrderRequestObject {
    /** 实际数 */
    actualQuantity: number;
    /** 批次订单id */
    id: string;
    /** undefined */
    lotNo?: string;
    /** 序列号ids */
    serialNoIds?: string[];
}
/** 成品物料填写请求DTO */
export interface IFinishedMaterialFillRequestDTO {
    /** 实际数(质检数) */
    actualQuantity?: number;
    /** 再次申请质检数 */
    applyQualityAgainQuantity?: number;
    /** 批次id */
    lotOrderId?: string;
    /** 操作时间 */
    optTime?: number;
}
/** 进出站工艺卡填写 */
export interface IEntryAndExitProcessCardFilling {
    /** 关键参数id */
    id?: string;
    /** 录入集合 - 带录入信息 */
    keyParameterDetailList?: IDetailsOnKeyParameters[];
}
/** 关键参数明细填写信息 */
export interface IDetailsOnKeyParameters {
    /** 明细id */
    id?: string;
    /** 图片上传key集合 - 明细录入类型是图片时，有值 */
    imageKeys?: string[];
    /** 录入值 - 明细录入类型不是图片时，有值 */
    inputValue?: string;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EInboundAndOutboundInformationDTO_handleOtherAsync {
    Y = "Y",
    N = "N"
}
