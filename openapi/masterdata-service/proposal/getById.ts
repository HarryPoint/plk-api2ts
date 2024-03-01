import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/合理化建议相关/getByIdUsingPOST_2
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultProposalResponseDTO>(
        {
            url: "/masterdata-service/proposal/getById",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«ProposalResponseDTO» */
export interface IJSONResultProposalResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProposalResponseDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProposalResponseDTO */
export interface IProposalResponseDTO {
    /** 编号 */
    code?: string;
    /** 提议部门负责人 */
    createDeptLeaderId?: string;
    /** undefined */
    id?: string;
    /** 图片上传 */
    imageKeys?: string[];
    /** 改善类别ID */
    improvementCategoryId?: string;
    /** 改善类别名称 */
    improvementCategoryName?: string;
    /** 改善部门 */
    improvementDeptId?: string;
    /** 改善部门负责人 */
    improvementDeptLeaderId?: string;
    /** 建议名称 */
    name?: string;
    /** 问题描述 */
    problemDesc?: string;
    /** 其他说明 */
    remark?: string;
    /** 可增加的收益或节约成本估算 */
    savingCost?: string;
    /** 解决方案 */
    solution?: string;
}
