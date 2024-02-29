import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:17400/doc.html#/default/生产任务相关/moveInUsingPOST
*/
export default function fetchMethod(options: { data: IIncomingInformationDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-mobile-web/api/app/mobile/produceTask/moveIn",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 进料信息DTO */
export interface IIncomingInformationDTO {
    /** 进出站记录id - 如果是从进出站记录里面点进来的，则必传 */
    moveInOutRecordId?: string;
    /** 生产任务id */
    produceTaskId: string;
    /** 成品物料填写信息列表 */
    finishedMaterialInputList?: IFinishedMaterialFillRequestDTO[];
    /** 进料生产工艺设备ids */
    moveInProduceTechnologyDeviceIds?: string[];
    /** 生产工艺模具ids */
    moveInProduceTechnologyMoldIds?: string[];
    /** BOM消耗列表 */
    bomMaterials?: IBOMConsumptionRequestDTO[];
    /** 关键参数信息填写 */
    keyParametersInfo?: IEntryAndExitProcessCardFilling;
    /** 拆分批次相关 */
    splitLots?: IIncomingBatchSplitRequestDTO[];
    /** undefined */
    handleOtherAsync?: EIncomingInformationDTO_handleOtherAsync;
}
/** 成品物料填写请求DTO */
export interface IFinishedMaterialFillRequestDTO {
    /** 批次id */
    lotOrderId?: string;
    /** 实际数(质检数) */
    actualQuantity?: number;
    /** 再次申请质检数 */
    applyQualityAgainQuantity?: number;
    /** 操作时间 */
    optTime?: number;
}
/** BOM消耗请求DTO */
export interface IBOMConsumptionRequestDTO {
    /** 生产工艺路径步骤bom明细关联id */
    id: string;
    /** 对应物料id */
    materialId: string;
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
    id: string;
    /** undefined */
    lotNo?: string;
    /** 实际数 */
    actualQuantity: number;
    /** 序列号ids */
    serialNoIds?: string[];
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
    /** 录入值 - 明细录入类型不是图片时，有值 */
    inputValue?: string;
    /** 图片上传key集合 - 明细录入类型是图片时，有值 */
    imageKeys?: string[];
}
/** 进料批次拆分请求DTO */
export interface IIncomingBatchSplitRequestDTO {
    /** 原始批次id */
    originalLotOrderId: string;
    /** 拆分数量 */
    splitQuantity?: number;
    /** 原始批次id */
    splitDetails: IRequestDTOForIncomingBatchSplitDetails[];
}
/** 进料批次拆分明细请求DTO */
export interface IRequestDTOForIncomingBatchSplitDetails {
    /** 拆分批次号 */
    splitLotNo: string;
    /** 实际数 */
    actualQuantity: number;
    /** 操作时间 */
    optTime?: number;
    /** undefined */
    splitLotOrderId?: string;
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
    ts?: string;
}

export enum EIncomingInformationDTO_handleOtherAsync {
    Y = "Y",
    N = "N"
}
