import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/提案部门完成情况表-相关/exportUsingPOST_24
*/
export default function fetchMethod(options: { data: IProposalDepartmentStatisticsQueryRequestDTO }, extraOptions?: any) {
    return http<IJSONResultLong>(
        {
            url: "/masterdata-service/proposalDepartmentStatistics/export",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** ProposalDepartmentStatisticsQueryRequestDTO */
export interface IProposalDepartmentStatisticsQueryRequestDTO {
    /** 部门ID列表 */
    departmentIdList?: string[];
    /** 部门责任人列表 */
    departmentOwnerIdList?: string[];
    /** 年份 */
    year?: number;
}
/** JSONResult«long» */
export interface IJSONResultLong {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: string;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
