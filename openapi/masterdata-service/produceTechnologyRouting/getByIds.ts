import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.139.107:16700/doc.html#/default/produce-technology-routing-controller/getByIdsUsingPOST_4
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
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProduceTechnologyRoutingResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProduceTechnologyRoutingResponseDTO */
export interface IProduceTechnologyRoutingResponseDTO {
    /** 创建用户ID */
    createUserId?: string;
    /** 创建用户名 */
    createUserName?: string;
    /** 生产工艺id */
    produceTechnologyId?: string;
    /** 创建部门ID */
    createDeptId?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 更新部门ID */
    updateDeptId?: string;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 更新用户ID */
    updateUserId?: string;
    /** 更新用户名称 */
    updateUserName?: string;
    /** 更新时间 */
    updateTime?: number;
    /** id */
    id?: string;
    /** 所属工艺路径id */
    routingId?: string;
    /** 工艺路径编码 */
    code?: string;
    /** 工艺路径名称 */
    name?: string;
    /** 关联物料id */
    materialId?: string;
    /** 关联BOM id */
    materialBomId?: string;
    /** 所属生产工艺物料BOMid */
    produceTechnologyMaterialBomId?: string;
}
