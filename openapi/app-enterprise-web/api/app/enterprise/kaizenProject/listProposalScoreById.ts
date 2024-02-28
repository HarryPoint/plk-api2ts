import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/项目相关/listProposalScoreByIdUsingPOST
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultListProposalScoreResponseDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/kaizenProject/listProposalScoreById",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«ProposalScoreResponseDTO»» */
export interface IJSONResultListProposalScoreResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProposalScoreResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProposalScoreResponseDTO */
export interface IProposalScoreResponseDTO {
    /** ID */
    id?: string;
    /** 评分编码 */
    code?: string;
    /** 项目ID */
    projectId?: string;
    /** 合理化建议ID */
    proposalId?: string;
    /** 初评者的得分 */
    preliminaryEvaluationScore?: number;
    /** 初评人员 */
    preliminaryEvaluationUserId?: string;
    /** 初评人员名称 */
    preliminaryEvaluationUserName?: string;
    /** 初评意见 */
    preliminaryEvaluationOpinions?: string;
    /** 复评得分 */
    reEvaluationScore?: number;
    /** 复评人员 */
    reEvaluationUserId?: string;
    /** 复评人员名称 */
    reEvaluationUserName?: string;
    /** 复评意见 */
    reEvaluationOpinions?: string;
}
