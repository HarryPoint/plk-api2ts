import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/设备数采数据参数相关/editUsingPOST_5
*/
export default function fetchMethod(options: { data: IDeviceDataAcquisitionCommunicationParametersEditDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/deviceCollectionParam/edit",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 设备数采通讯参数编辑DTO */
export interface IDeviceDataAcquisitionCommunicationParametersEditDTO {
    /** id */
    id?: number;
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
    ts?: number;
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
