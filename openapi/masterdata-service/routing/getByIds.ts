import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工艺路径相关/getByIdsUsingPOST_5
*/
export default function fetchMethod(options: { data: string[], params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListBaseVO2>(
        {
            url: "/masterdata-service/routing/getByIds",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«基础VO»»_2 */
export interface IJSONResultListBaseVO2 {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IBasicVO2[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 基础VO_2 */
export interface IBasicVO2 {
    /** 工艺路径编码 */
    code?: string;
    /** 创建部门id */
    createDeptId?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建员工id */
    createUserId?: string;
    /** 数据状态 0停用，1启用，-1已删除 */
    dataStatus?: number;
    /** 所属企业id */
    enterpriseId?: string;
    /** id */
    id?: string;
    /** 是否默认 */
    isDefault?: EBasicVO2_isDefault;
    /** 所属主物料bomid */
    materialBomId?: string;
    /** 所属主物料id */
    materialId?: string;
    /** 工艺路径名称 */
    name?: string;
    /** 修改部门id */
    updateDeptId?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 修改账户id */
    updateUserId?: string;
}

export enum EBasicVO2_isDefault {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
