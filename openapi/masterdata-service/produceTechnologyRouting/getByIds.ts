import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/produce-technology-routing-controller/getByIdsUsingPOST_4
*/
export default function fetchMethod(options: { data: string[] }, extraOptions?: any) {
    return http<IJSONResultListProduceTechnologyRoutingResponseDTO>(
        {
            url: "/masterdata-service/produceTechnologyRouting/getByIds",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«ProduceTechnologyRoutingResponseDTO»» */
export interface IJSONResultListProduceTechnologyRoutingResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProduceTechnologyRoutingResponseDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProduceTechnologyRoutingResponseDTO */
export interface IProduceTechnologyRoutingResponseDTO {
    /** 工艺路径编码 */
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
    /** 关联BOM id */
    materialBomId?: string;
    /** 关联物料id */
    materialId?: string;
    /** 工艺路径名称 */
    name?: string;
    /** 生产工艺id */
    produceTechnologyId?: string;
    /** 所属生产工艺物料BOMid */
    produceTechnologyMaterialBomId?: string;
    /** 所属工艺路径id */
    routingId?: string;
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
