import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/合理化建议相关/getByIdUsingPOST_2
*/
export default function fetchMethod(options: { params: { id?: number } }, extraOptions?: any) {
    return http<IJSONResultProposalResponseDTO>(
        {
            url: "/masterdata-service/proposal/getById",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«ProposalResponseDTO» */
export interface IJSONResultProposalResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProposalResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** ProposalResponseDTO */
export interface IProposalResponseDTO {
    /** undefined */
    id?: number;
    /** 编号 */
    code?: string;
    /** 建议名称 */
    name?: string;
    /** 改善类别ID */
    improvementCategoryId?: number;
    /** 改善类别名称 */
    improvementCategoryName?: string;
    /** 改善部门 */
    improvementDeptId?: number;
    /** 改善部门负责人 */
    improvementDeptLeaderId?: number;
    /** 提议部门负责人 */
    createDeptLeaderId?: number;
    /** 问题描述 */
    problemDesc?: string;
    /** 解决方案 */
    solution?: string;
    /** 可增加的收益或节约成本估算 */
    savingCost?: string;
    /** 其他说明 */
    remark?: string;
    /** 图片上传 */
    imageKeys?: string[];
}
