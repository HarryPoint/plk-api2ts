import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/设备人员能力相关/existsLevelUsingGET
*/
export default function fetchMethod(params: { maintainLevel?: string }, extraOptions?: any) {
    return http<IJSONResultDevicePersonnelCapabilityLevelWhetherThereIsAResponseDTO>(
        {
            url: "/masterdata-service/deviceEmployeeCapacity/existsLevel",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«设备人员能力等级是否存在响应DTO» */
export interface IJSONResultDevicePersonnelCapabilityLevelWhetherThereIsAResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IEquipmentPersonnelCapabilityLevelWhetherThereIsAResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 设备人员能力等级是否存在响应DTO */
export interface IEquipmentPersonnelCapabilityLevelWhetherThereIsAResponseDTO {
    /** 是否存在 */
    isExist?: string;
}
