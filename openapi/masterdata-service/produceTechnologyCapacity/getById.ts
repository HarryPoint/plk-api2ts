import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/生产工艺产能相关/getByIdUsingGET_9
*/
export default function fetchMethod(options: { params: { Id?: string } }, extraOptions?: any) {
    return http<IJSONResultProduceTechnologyCapacityResponseDTO>(
        {
            url: "/masterdata-service/produceTechnologyCapacity/getById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«ProduceTechnologyCapacityResponseDTO» */
export interface IJSONResultProduceTechnologyCapacityResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProduceTechnologyCapacityResponseDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProduceTechnologyCapacityResponseDTO */
export interface IProduceTechnologyCapacityResponseDTO {
    /** 产出数量 */
    capacityProduceQuantity?: number;
    /** 生产耗时 */
    capacityProduceTime?: number;
    /** 生产时间单位 */
    capacityTimeType?: EProduceTechnologyCapacityResponseDTO_capacityTimeType;
    /** 产能编号 */
    code?: string;
    /** 创建部门ID */
    createDeptId?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建用户ID */
    createUserId?: string;
    /** 创建用户名 */
    createUserName?: string;
    /** id */
    id?: string;
    /** 产能名称 */
    name?: string;
    /** 准备耗时 */
    readyTime?: number;
    /** 准备时间单位 */
    readyTimeUnit?: EProduceTechnologyCapacityResponseDTO_readyTimeUnit;
    /** 更新部门ID */
    updateDeptId?: string;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 更新用户ID */
    updateUserId?: string;
    /** 更新用户名称 */
    updateUserName?: string;
}

export enum EProduceTechnologyCapacityResponseDTO_capacityTimeType {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}

export enum EProduceTechnologyCapacityResponseDTO_readyTimeUnit {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}
