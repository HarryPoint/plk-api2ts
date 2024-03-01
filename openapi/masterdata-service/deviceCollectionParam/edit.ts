import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/设备数采数据参数相关/editUsingPOST_3
*/
export default function fetchMethod(options: { data: IDeviceDataAcquisitionCommunicationParametersEditDTO, params: { EnterpriseId?: string; UserId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/deviceCollectionParam/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 设备数采通讯参数编辑DTO */
export interface IDeviceDataAcquisitionCommunicationParametersEditDTO {
    /** 设备编号 */
    code?: string;
    /** 数据类型 */
    dataType?: EDeviceDataAcquisitionCommunicationParametersEditDTO_dataType;
    /** id */
    id?: string;
    /** 是否应用编码规则 */
    isCodeRule: EDeviceDataAcquisitionCommunicationParametersEditDTO_isCodeRule;
    /** 设备名称 */
    name: string;
    /** 备注 */
    remark?: string;
    /** 单位 */
    unit?: string;
    /** 单位类型 */
    unitType?: EDeviceDataAcquisitionCommunicationParametersEditDTO_unitType;
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

export enum EDeviceDataAcquisitionCommunicationParametersEditDTO_dataType {
    /** 数字 */
    NUMBER = "NUMBER",
    /** 文本 */
    TEXT = "TEXT"
}

export enum EDeviceDataAcquisitionCommunicationParametersEditDTO_isCodeRule {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EDeviceDataAcquisitionCommunicationParametersEditDTO_unitType {
    /** 时间 */
    TIME = "TIME",
    /** 数量 */
    QUANTITY = "QUANTITY"
}
