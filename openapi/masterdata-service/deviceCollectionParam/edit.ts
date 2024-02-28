import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/设备数采数据参数相关/editUsingPOST_3
*/
export default function fetchMethod(options: { data: IDeviceDataAcquisitionCommunicationParametersEditDTO, params: { enterpriseId?: string; userId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
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
    /** id */
    id?: string;
    /** 设备名称 */
    name: string;
    /** 设备编号 */
    code?: string;
    /** 数据类型 */
    dataType?: EDeviceDataAcquisitionCommunicationParametersEditDTO_dataType;
    /** 单位类型 */
    unitType?: EDeviceDataAcquisitionCommunicationParametersEditDTO_unitType;
    /** 是否应用编码规则 */
    isCodeRule: EDeviceDataAcquisitionCommunicationParametersEditDTO_isCodeRule;
    /** 单位 */
    unit?: string;
    /** 备注 */
    remark?: string;
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

export enum EDeviceDataAcquisitionCommunicationParametersEditDTO_dataType {
    /** 数字 */
    NUMBER = "NUMBER",
    /** 文本 */
    TEXT = "TEXT"
}

export enum EDeviceDataAcquisitionCommunicationParametersEditDTO_unitType {
    /** 时间 */
    TIME = "TIME",
    /** 数量 */
    QUANTITY = "QUANTITY"
}

export enum EDeviceDataAcquisitionCommunicationParametersEditDTO_isCodeRule {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
