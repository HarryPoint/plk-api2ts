import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/设备人员能力相关/existsLevelUsingGET
*/
export default function fetchMethod(options: { params: { maintainLevel?: string } }, extraOptions?: any) {
    return http<IJSONResultDevicePersonnelCapabilityLevelWhetherThereIsAResponseDTO>(
        {
            url: "/masterdata-service/deviceEmployeeCapacity/existsLevel",
            method: "GET",
            ...options,
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
    ts?: string;
}
/** 设备人员能力等级是否存在响应DTO */
export interface IEquipmentPersonnelCapabilityLevelWhetherThereIsAResponseDTO {
    /** 是否存在 */
    isExist?: EEquipmentPersonnelCapabilityLevelWhetherThereIsAResponseDTO_isExist;
}

export enum EEquipmentPersonnelCapabilityLevelWhetherThereIsAResponseDTO_isExist {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
